import {
  DeepKeys,
  DeepValue,
  ReactFormExtendedApi,
} from "@tanstack/react-form";

type TypedDeepKeys<S, T> = Exclude<
  {
    [K in DeepKeys<S>]: DeepValue<S, K> extends T ? K : never;
  }[DeepKeys<S>],
  number
>;

export const FormInput = <FormData, K extends TypedDeepKeys<FormData, string>>({
  form,
  fieldKey,
}: {
  form: ReactFormExtendedApi<FormData>;
  fieldKey: K;
}) => {
  return (
    <form.Field
      name={fieldKey}
      children={(field) => (
        <input
          value={field.state.value}
          onChange={(v) => field.handleChange(v)}
          onBlur={field.handleBlur}
          name={fieldKey}
        />
      )}
    />
  );
};