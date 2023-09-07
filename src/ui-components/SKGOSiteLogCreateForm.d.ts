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
export declare type SKGOSiteLogCreateFormInputValues = {};
export declare type SKGOSiteLogCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SKGOSiteLogCreateFormOverridesProps = {
    SKGOSiteLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type SKGOSiteLogCreateFormProps = React.PropsWithChildren<{
    overrides?: SKGOSiteLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SKGOSiteLogCreateFormInputValues) => SKGOSiteLogCreateFormInputValues;
    onSuccess?: (fields: SKGOSiteLogCreateFormInputValues) => void;
    onError?: (fields: SKGOSiteLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SKGOSiteLogCreateFormInputValues) => SKGOSiteLogCreateFormInputValues;
    onValidate?: SKGOSiteLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function SKGOSiteLogCreateForm(props: SKGOSiteLogCreateFormProps): React.ReactElement;
