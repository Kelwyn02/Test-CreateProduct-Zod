'use client'

import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {attributeSchema, AttributeFormData } from "./actions";

export function ProductAttributeForm() {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<AttributeFormData>({
        resolver: zodResolver(attributeSchema),
        defaultValues: {
            activity: "",
        },
    });

    const onSubmit: SubmitHandler<AttributeFormData> = (data) => {
        console.log("Validando dados", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div className="space-y-2">
                <Label htmlFor="activity" className="text-neutral-100 mb-2">
                    Atividade
                </Label>

                <Controller
                    name="activity"
                    control={control}
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger id="activity" className="w-32">
                                <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="attr1">Atributo 1</SelectItem>
                                <SelectItem value="attr2">Atributo 2</SelectItem>
                                <SelectItem value="attr3">Atributo 3</SelectItem>
                                <SelectItem value="attr4">Atributo 4</SelectItem>
                                <SelectItem value="attr5">Atributo 5</SelectItem>
                                <SelectItem value="attr6">Atributo 6</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />

                {errors.activity && (
                    <p className="text-sm text-red-500 mt-1">{errors.activity.message}</p>
                )}
            </div>

            <div className="flex justify-end">
                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100">
                    Salvar
                </Button>
            </div>

        </form>
    )
}