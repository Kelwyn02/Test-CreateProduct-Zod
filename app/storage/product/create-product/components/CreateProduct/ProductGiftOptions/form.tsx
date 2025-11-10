'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {giftOptionsSchema, GiftOptionsFormData} from "./actions"

export function ProductGiftOptionsForm() {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<GiftOptionsFormData>({
        resolver: zodResolver(giftOptionsSchema),
        defaultValues: {
            allowMessage: true,
            useConfigMessage: true,
            allowWrapping: true,
            useConfigWrapping: true,
            wrappingPrice: "",
        },
    });

    const onSubmit: SubmitHandler<GiftOptionsFormData> = (data) => {
        console.log("Validando dados", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-x-6 gap-y-6 items-center">

                <Label htmlFor="allow-message" className="text-neutral-100">
                    Permitir mensagem
                </Label>

                <Controller
                    name="allowMessage"
                    control={control}
                    render={({ field }) => (
                        <Switch
                            id="allow-message"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    )}
                />

                <Controller
                    name="useConfigMessage"
                    control={control}
                    render={({ field }) => (
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="use-config-1"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                            <Label htmlFor="use-config-1" className="text-neutral-100">
                                Usar configurações
                            </Label>
                        </div>
                    )}
                />

                <Label htmlFor="allow-wrapping" className="text-neutral-100">
                    Permitir embrulho
                </Label>

                <Controller
                    name="allowWrapping"
                    control={control}
                    render={({ field }) => (
                        <Switch
                            id="allow-wrapping"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    )}
                />

                <Controller
                    name="useConfigWrapping"
                    control={control}
                    render={({ field }) => (
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="use-config-2"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                            <Label htmlFor="use-config-2" className="text-neutral-100">
                                Usar configurações
                            </Label>
                        </div>
                    )}
                />

                <Label htmlFor="wrapping-price" className="text-neutral-100">
                    Preço para embrulho
                </Label>

                <div className="space-y-1">
                    <Input
                        id="wrapping-price"
                        className="max-w-xs"
                        {...register("wrappingPrice")}
                    />
                    {errors.wrappingPrice && (
                        <p className="text-sm text-red-500">{errors.wrappingPrice.message}</p>
                    )}
                </div>

            </div>

            <div className="flex justify-end">
                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100">
                    Salvar Opções
                </Button>
            </div>
        </form>
    )
}