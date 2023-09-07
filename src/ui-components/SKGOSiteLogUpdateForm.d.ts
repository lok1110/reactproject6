/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SKGOSiteLog } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SKGOSiteLogUpdateFormInputValues = {};
export declare type SKGOSiteLogUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SKGOSiteLogUpdateFormOverridesProps = {
    SKGOSiteLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type SKGOSiteLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: SKGOSiteLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sKGOSiteLog?: SKGOSiteLog;
    onSubmit?: (fields: SKGOSiteLogUpdateFormInputValues) => SKGOSiteLogUpdateFormInputValues;
    onSuccess?: (fields: SKGOSiteLogUpdateFormInputValues) => void;
    onError?: (fields: SKGOSiteLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SKGOSiteLogUpdateFormInputValues) => SKGOSiteLogUpdateFormInputValues;
    onValidate?: SKGOSiteLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SKGOSiteLogUpdateForm(props: SKGOSiteLogUpdateFormProps): React.ReactElement;
