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

const websitesSchema = z.object({
  web1: z.boolean().optional(),
  web2: z.boolean().optional(),
  web3: z.boolean().optional(),
  web4: z.boolean().optional(),
});

type WebsitesFormData = z.infer<typeof websitesSchema>;

export function ProductOnWebsites() {
  const {
    control,
    handleSubmit,
  } = useForm<WebsitesFormData>({
    resolver: zodResolver(websitesSchema),
  });

  const onSubmit: SubmitHandler<WebsitesFormData> = (data) => {
    console.log("Validando dados", data);
  };

  return (
    <Accordion type="single" collapsible className="w-full m-4 pr-8">
      <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
        <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
          Produtos em websites
        </AccordionTrigger>
        <AccordionContent className="p-4">
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            <h3 className="text-neutral-100 text-md font-semibold mb-6">Websites</h3>
            
            <div className="space-y-4">

              <Controller
                name="web1"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="web1"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="web1" className="text-zinc-100">
                      Website principal
                    </Label>
                  </div>
                )}
              />

              <Controller
                name="web2"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="web2"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="web2" className="text-zinc-100">
                      Website secundário
                    </Label>
                  </div>
                )}
              />

              <Controller
                name="web3"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="web3"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="web3" className="text-zinc-100">
                      Website terciário
                    </Label>
                  </div>
                )}
              />

              <Controller
                name="web4"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="web4"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="web4" className="text-zinc-100">
                      Website quaternário
                    </Label>
                  </div>
                )}
              />
            </div>

            <div className="flex justify-end mt-4">
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