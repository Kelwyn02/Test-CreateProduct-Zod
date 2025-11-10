'use client'

import { imageSchema, ImageFormData} from "./actions"

import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";

import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function ProductImageAndVideoForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ImageFormData>({
        resolver: zodResolver(imageSchema),
    });

    const uploadedImages = useWatch({
        control,
        name: "images",
    });

    const onSubmit: SubmitHandler<ImageFormData> = (data) => {
        console.log("Validando dados", data.images);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <input
                type="file"
                id="image-upload"
                className="hidden"
                multiple
                accept="image/png, image/jpeg, image/webp"
                {...register("images")}
            />

            <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                <label htmlFor="image-upload" className="flex items-center gap-4 cursor-pointer">
                    <div className="border border-neutral-600 rounded-sm p-4 flex items-center justify-center h-20 w-20 shrink-0">
                        <CameraIcon className="h-10 w-10 text-neutral-100" />
                    </div>

                    <div className="text-base leading-snug">
                        {uploadedImages && uploadedImages.length > 0 ? (
                            <div className="text-sm text-neutral-300">
                                {Array.from(uploadedImages).map(file => (
                                    <div key={file.name}>{file.name}</div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-cyan-500">
                                Localize ou arraste uma<br />imagem aqui
                            </p>
                        )}
                    </div>
                </label>

                <Button
                    type="submit"
                    variant="default"
                    className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100"
                >
                    Salvar
                </Button>
            </div>

            {errors.images && (
                <p className="text-sm text-red-500 mt-2">{errors.images.message}</p>
            )}

        </form>
    )
}