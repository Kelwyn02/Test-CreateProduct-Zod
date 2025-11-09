import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { websitesSchema, WebsitesFormData } from "./actions"

export function ProductOnWebsitesForm() {
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
    )
}