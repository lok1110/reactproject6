/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SiteLog } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SiteLogUpdateFormInputValues = {
    SiteName?: string;
};
export declare type SiteLogUpdateFormValidationValues = {
    SiteName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SiteLogUpdateFormOverridesProps = {
    SiteLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SiteName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SiteLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: SiteLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    siteLog?: SiteLog;
    onSubmit?: (fields: SiteLogUpdateFormInputValues) => SiteLogUpdateFormInputValues;
    onSuccess?: (fields: SiteLogUpdateFormInputValues) => void;
    onError?: (fields: SiteLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SiteLogUpdateFormInputValues) => SiteLogUpdateFormInputValues;
    onValidate?: SiteLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SiteLogUpdateForm(props: SiteLogUpdateFormProps): React.ReactElement;
