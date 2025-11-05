'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const giftOptionsSchema = z.object({
  allowMessage: z.boolean().optional(),
  useConfigMessage: z.boolean().optional(),
  allowWrapping: z.boolean().optional(),
  useConfigWrapping: z.boolean().optional(),
  wrappingPrice: z.string().optional()
    .refine(val => !val || !isNaN(Number(val)), {
      message: "O preço deve ser um número.",
    }),
});

type GiftOptionsFormData = z.infer<typeof giftOptionsSchema>;

export function ProductGiftOptions() {
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
    <Accordion type="single" collapsible className="w-full m-4 pr-8">
      <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
        <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
          Opções de presente
        </AccordionTrigger>
        <AccordionContent className="p-4">

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
          
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}