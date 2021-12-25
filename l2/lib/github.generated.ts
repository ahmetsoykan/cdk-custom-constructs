// Copyright 2012-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Generated from the AWS CloudFormation Resource Specification
// See: docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-resource-specification.html
// @cfn2ts:meta@ {"generated":"2021-12-24T14:40:34.350Z","fingerprint":"WeeYaGbML531iOPn2ANNR+SAcAzt8MhaVQrp+ZYgxjU="}

/* eslint-disable max-len */ // This is generated code - line lengths are difficult to control

import * as cdk from '@aws-cdk/core';
import * as cfn_parse from '@aws-cdk/core/lib/cfn-parse';

/**
 * Properties for defining a `Corp::Github::Repo`
 *
 * @stability external
 */
export interface CfnRepoProps {

    /**
     * `Corp::Github::Repo.Name`
     */
    readonly name: string;

    /**
     * `Corp::Github::Repo.Oauthtoken`
     */
    readonly oauthtoken: string;

    /**
     * `Corp::Github::Repo.Owner`
     */
    readonly owner: string;

    /**
     * `Corp::Github::Repo.Description`
     */
    readonly description?: string;
}

/**
 * Determine whether the given properties match those of a `CfnRepoProps`
 *
 * @param properties - the TypeScript properties of a `CfnRepoProps`
 *
 * @returns the result of the validation.
 */
function CfnRepoPropsValidator(properties: any): cdk.ValidationResult {
    if (!cdk.canInspect(properties)) { return cdk.VALIDATION_SUCCESS; }
    const errors = new cdk.ValidationResults();
    if (typeof properties !== 'object') {
        errors.collect(new cdk.ValidationResult('Expected an object, but received: ' + JSON.stringify(properties)));
    }
    errors.collect(cdk.propertyValidator('name', cdk.requiredValidator)(properties.name));
    errors.collect(cdk.propertyValidator('name', cdk.validateString)(properties.name));
    errors.collect(cdk.propertyValidator('owner', cdk.requiredValidator)(properties.owner));
    errors.collect(cdk.propertyValidator('owner', cdk.validateString)(properties.owner));
    errors.collect(cdk.propertyValidator('description', cdk.validateString)(properties.description));
    errors.collect(cdk.propertyValidator('oauthtoken', cdk.requiredValidator)(properties.oauthtoken));
    errors.collect(cdk.propertyValidator('oauthtoken', cdk.validateString)(properties.oauthtoken));
    return errors.wrap('supplied properties not correct for "CfnRepoProps"');
}

/**
 * Renders the AWS CloudFormation properties of an `Corp::Github::Repo` resource
 *
 * @param properties - the TypeScript properties of a `CfnRepoProps`
 *
 * @returns the AWS CloudFormation properties of an `Corp::Github::Repo` resource.
 */
// @ts-ignore TS6133
function cfnRepoPropsToCloudFormation(properties: any): any {
    if (!cdk.canInspect(properties)) { return properties; }
    CfnRepoPropsValidator(properties).assertSuccess();
    return {
        Name: cdk.stringToCloudFormation(properties.name),
        Oauthtoken: cdk.stringToCloudFormation(properties.oauthtoken),
        Owner: cdk.stringToCloudFormation(properties.owner),
        Description: cdk.stringToCloudFormation(properties.description),
    };
}

// @ts-ignore TS6133
function CfnRepoPropsFromCloudFormation(properties: any): cfn_parse.FromCloudFormationResult<CfnRepoProps> {
    properties = properties || {};
    const ret = new cfn_parse.FromCloudFormationPropertyObject<CfnRepoProps>();
    ret.addPropertyResult('name', 'Name', cfn_parse.FromCloudFormation.getString(properties.Name));
    ret.addPropertyResult('oauthtoken', 'Oauthtoken', cfn_parse.FromCloudFormation.getString(properties.Oauthtoken));
    ret.addPropertyResult('owner', 'Owner', cfn_parse.FromCloudFormation.getString(properties.Owner));
    ret.addPropertyResult('description', 'Description', properties.Description != null ? cfn_parse.FromCloudFormation.getString(properties.Description) : undefined);
    ret.addUnrecognizedPropertiesAsExtra(properties);
    return ret;
}

/**
 * A CloudFormation `Corp::Github::Repo`
 *
 * @cloudformationResource Corp::Github::Repo
 * @stability external
 */
export class CfnRepo extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    public static readonly CFN_RESOURCE_TYPE_NAME = "Corp::Github::Repo";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    public static _fromCloudFormation(scope: cdk.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRepo {
        resourceAttributes = resourceAttributes || {};
        const resourceProperties = options.parser.parseValue(resourceAttributes.Properties);
        const propsResult = CfnRepoPropsFromCloudFormation(resourceProperties);
        const ret = new CfnRepo(scope, id, propsResult.value);
        for (const [propKey, propVal] of Object.entries(propsResult.extraProperties))  {
            ret.addPropertyOverride(propKey, propVal);
        }
        options.parser.handleAttributes(ret, resourceAttributes, id);
        return ret;
    }

    /**
     * @cloudformationAttribute URL
     */
    public readonly attrUrl: string;

    /**
     * `Corp::Github::Repo.Name`
     */
    public name: string;

    /**
     * `Corp::Github::Repo.Oauthtoken`
     */
    public oauthtoken: string;

    /**
     * `Corp::Github::Repo.Owner`
     */
    public owner: string;

    /**
     * `Corp::Github::Repo.Description`
     */
    public description: string | undefined;

    /**
     * Create a new `Corp::Github::Repo`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: cdk.Construct, id: string, props: CfnRepoProps) {
        super(scope, id, { type: CfnRepo.CFN_RESOURCE_TYPE_NAME, properties: props });
        cdk.requireProperty(props, 'name', this);
        cdk.requireProperty(props, 'owner', this);
        cdk.requireProperty(props, 'oauthtoken', this);
        this.attrUrl = cdk.Token.asString(this.getAtt('URL'));

        this.name = props.name;
        this.oauthtoken = props.oauthtoken;
        this.owner = props.owner;
        this.description = props.description;
    }

    /**
     * Examines the CloudFormation resource and discloses attributes.
     *
     * @param inspector - tree inspector to collect and process attributes
     *
     */
    public inspect(inspector: cdk.TreeInspector) {
        inspector.addAttribute("aws:cdk:cloudformation:type", CfnRepo.CFN_RESOURCE_TYPE_NAME);
        inspector.addAttribute("aws:cdk:cloudformation:props", this.cfnProperties);
    }

    protected get cfnProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            oauthtoken: this.oauthtoken,
            owner: this.owner,
            description: this.description,
        };
    }

    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return cfnRepoPropsToCloudFormation(props);
    }
}
