import { FieldPath, FormProvider, useForm, useFormContext } from 'react-hook-form';

export interface LandingFormValue {
  store: {
    name: string;
    type: string;
    location: string;
    bestMenu: string;
    price: number;
    target: string;
    mood: string;
  };
}

export function LandingFormProvider({ children }: { children: React.ReactNode }) {
  const methods = useForm<LandingFormValue>({ mode: 'onTouched' });
  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useLandingFormContext() {
  return useFormContext<LandingFormValue>();
}

export type LandingFormFieldPath = FieldPath<LandingFormValue>;