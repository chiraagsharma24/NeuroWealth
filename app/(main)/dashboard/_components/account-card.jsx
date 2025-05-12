"use client";

import { updateDefaultAccount } from "@/actions/accounts";
import useFetch from "@/app/hooks/use-Fetch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AccountCard({ account }) {
  const { name, type, balance, id, isDefault } = account;
  const router = useRouter();

  const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);

  const handleDefaultChange = async (event) => {
    event.preventDefault();

    if (isDefault) {
      toast.warning("You need at least 1 default account");
      return;
    }

    await updateDefaultFn(id);
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Default account updated successfully");
    }
  }, [updatedAccount, updateDefaultLoading]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update default account");
    }
  }, [error]);

  return (
    <Card className="w-full shadow-sm hover:shadow-md transition-shadow bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs sm:text-sm font-medium capitalize truncate max-w-[70%]">
          {name}
        </CardTitle>
        <Switch
          checked={isDefault}
          onClick={handleDefaultChange}
          disabled={updateDefaultLoading}
          className="scale-90 sm:scale-100"
        />
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between gap-2">
          <div className="text-base sm:text-lg font-bold tracking-tight">
            ₹ {parseFloat(balance).toFixed(2)}
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => router.push(`/account/${id}`)}
            className="text-xs sm:text-sm h-7 sm:h-8 px-2 sm:px-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View
          </Button>
        </div>
        <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
          {type.charAt(0) + type.slice(1).toLowerCase()} Account
        </p>
      </CardContent>
    </Card>
  );
}
