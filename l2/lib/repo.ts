import { Construct } from 'constructs';
import {Resource} from '@aws-cdk/core'
import { CfnRepo } from "./github.generated";

export interface IRepoProps {
    name: string;
    oauthToken: string;
    owner: string;
    description: string;
}

export class Repo extends Resource {
    public readonly url: string;

    constructor(scope: Construct, id: string, props: IRepoProps) {
        super(scope, id);

        const repo = new CfnRepo(this, "Repo", {
            name: props.name,
            oauthtoken: props.oauthToken,
            description: props.description,
            owner: props.owner
        })

        this.url = repo.ref;
    }
}