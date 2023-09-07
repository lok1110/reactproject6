/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SiteLogCreateFormInputValues = {
    SiteName?: string;
};
export declare type SiteLogCreateFormValidationValues = {
    SiteName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SiteLogCreateFormOverridesProps = {
    SiteLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SiteName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SiteLogCreateFormProps = React.PropsWithChildren<{
    overrides?: SiteLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SiteLogCreateFormInputValues) => SiteLogCreateFormInputValues;
    onSuccess?: (fields: SiteLogCreateFormInputValues) => void;
    onError?: (fields: SiteLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SiteLogCreateFormInputValues) => SiteLogCreateFormInputValues;
    onValidate?: SiteLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function SiteLogCreateForm(props: SiteLogCreateFormProps): React.ReactElement;
