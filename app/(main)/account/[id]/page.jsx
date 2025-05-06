import { getAccountWithTransactions } from "@/actions/accounts";
import { notFound } from "next/navigation";

export default async function AccountPage({params}){
    const accountData = await getAccountWithTransactions(params.id) ;

    if (!accountData) {
        notFound() ;
    }

    const {transactions, ...account } = accountData ;

    return (
        <div className="space-y-8 px-5">
            <div className="flex gap-4 items-end justify-between">
                <div>
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight gradient-title capitalize">
                        {account.name}
                    </h1>
                    <p>
                        {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
                        Account
                    </p>
                </div>

                <div className="text-right pb-2">
                    <div className="text-xl sm:text-2xl font-bold">
                    ₹{parseFloat(account.balance).toFixed(2)}
                    </div>
                    <p className="text-sm text-muted-foreground"> 
                        {account._count.transactions} Transactions
                    </p>
                </div>
            </div>
        </div>
    )
}