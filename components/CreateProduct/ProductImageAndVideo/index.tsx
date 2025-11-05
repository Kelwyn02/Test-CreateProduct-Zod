'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";

import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const imageSchema = z.object({
  images: z.instanceof(FileList)
    .refine(files => files.length > 0, "É preciso enviar pelo menos uma imagem.")
    .refine(files => files.length <= 5, "Você pode enviar no máximo 5 imagens.")
    .refine(files => Array.from(files).every(file => file.size <= MAX_FILE_SIZE), `Cada imagem deve ter no máximo 5MB.`)
    .refine(files => Array.from(files).every(file => ACCEPTED_IMAGE_TYPES.includes(file.type)), "Apenas arquivos .jpg, .png ou .webp são aceitos.")
});

type ImageFormData = z.infer<typeof imageSchema>;

export function ProductImageAndVideo() {
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
    <Accordion type="single" collapsible className="w-full m-4 pr-8">
      <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
        <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
          Imagens e vídeos
        </AccordionTrigger>
        <AccordionContent className="p-4">
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}