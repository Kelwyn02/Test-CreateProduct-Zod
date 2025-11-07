'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { downloadSchema, DownloadFormData } from "./actions"

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


export function ProductDownloadForm() {
    const {
        control,
        handleSubmit,
    } = useForm<DownloadFormData>({
        resolver: zodResolver(downloadSchema),
        defaultValues: {
            downloadable: true,
        },
    });

    const onSubmit: SubmitHandler<DownloadFormData> = (data) => {
        console.log("Validando dados", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <Controller
                name="downloadable"
                control={control}
                render={({ field }) => (
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="downloadable"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                        <Label htmlFor="downloadable" className="text-neutral-100">
                            É possível realizar o download deste produto?
                        </Label>
                    </div>
                )}
            />

            <div className="flex justify-end">
                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100">
                    Salvar
                </Button>
            </div>

        </form>
    )
}
