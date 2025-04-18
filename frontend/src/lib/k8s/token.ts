import { KubeObjectInterface } from './KubeObject';

export interface KubeToken extends KubeObjectInterface {
  status: {
    token: string;
    expirationTimestamp: string;
  };
  spec: {
    audiences: string[];
    expirationSeconds: number;
  };
}
