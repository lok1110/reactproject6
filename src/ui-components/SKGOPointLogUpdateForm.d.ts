/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SKGOPointLog } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SKGOPointLogUpdateFormInputValues = {
    Timestamp?: string;
};
export declare type SKGOPointLogUpdateFormValidationValues = {
    Timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SKGOPointLogUpdateFormOverridesProps = {
    SKGOPointLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SKGOPointLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: SKGOPointLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sKGOPointLog?: SKGOPointLog;
    onSubmit?: (fields: SKGOPointLogUpdateFormInputValues) => SKGOPointLogUpdateFormInputValues;
    onSuccess?: (fields: SKGOPointLogUpdateFormInputValues) => void;
    onError?: (fields: SKGOPointLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SKGOPointLogUpdateFormInputValues) => SKGOPointLogUpdateFormInputValues;
    onValidate?: SKGOPointLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SKGOPointLogUpdateForm(props: SKGOPointLogUpdateFormProps): React.ReactElement;
