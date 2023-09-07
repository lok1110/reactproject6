/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SKGOCreateFormInputValues = {};
export declare type SKGOCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SKGOCreateFormOverridesProps = {
    SKGOCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type SKGOCreateFormProps = React.PropsWithChildren<{
    overrides?: SKGOCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SKGOCreateFormInputValues) => SKGOCreateFormInputValues;
    onSuccess?: (fields: SKGOCreateFormInputValues) => void;
    onError?: (fields: SKGOCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SKGOCreateFormInputValues) => SKGOCreateFormInputValues;
    onValidate?: SKGOCreateFormValidationValues;
} & React.CSSProperties>;
export default function SKGOCreateForm(props: SKGOCreateFormProps): React.ReactElement;
