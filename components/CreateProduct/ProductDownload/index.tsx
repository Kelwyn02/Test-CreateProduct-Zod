'use client'

import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const downloadSchema = z.object({
  downloadable: z.boolean().optional(),
});

type DownloadFormData = z.infer<typeof downloadSchema>;

export function ProductDownload() {
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
    <Accordion type="single" collapsible className="w-full m-4 pr-8">
      <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
        <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
          Download de conteúdo
        </AccordionTrigger>
        <AccordionContent className="p-4">

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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}