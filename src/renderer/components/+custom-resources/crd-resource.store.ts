import { KubeApi } from "../../api/kube-api";
import { KubeObjectStore } from "../../kube-object.store";
import { KubeObject } from "../../api/kube-object";
import { autobind } from "../../../common/utils";

@autobind
export class CRDResourceStore<T extends KubeObject = any> extends KubeObjectStore<T> {
  api: KubeApi;

  constructor(api: KubeApi<T>) {
    super();
    this.api = api;
  }
}
