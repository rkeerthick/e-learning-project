export type buttonProps = {
  buttonStyle?: "danger" | "success" | "warning" | "";
  type: "submit" | "reset" | "button" | undefined;
  title: string;
  classes?: string;
};

export type labelInputProps = {
  isLabel?: boolean;
  label?: string;
  inputType: React.HTMLInputTypeAttribute | undefined;
  placeholder: string | undefined;
  isError?: boolean;
  error?: string;
  isRequired?: boolean;
  classes?: string;
};
