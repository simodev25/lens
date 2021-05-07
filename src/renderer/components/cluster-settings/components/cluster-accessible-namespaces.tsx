import React from "react";
import { observer } from "mobx-react";
import { Cluster } from "../../../../main/cluster";
import { SubTitle } from "../../layout/sub-title";
import { EditableList } from "../../editable-list";
import { observable } from "mobx";
import { namespaceValue } from "../../input/input_validators";

interface Props {
  cluster: Cluster;
}

@observer
export class ClusterAccessibleNamespaces extends React.Component<Props> {
  @observable namespaces = new Set(this.props.cluster.accessibleNamespaces);

  render() {
    return (
      <>
        <SubTitle title="Accessible Namespaces" id="accessible-namespaces" />
        <EditableList
          placeholder="Add new namespace..."
          validators={namespaceValue}
          add={(newNamespace) => {
            this.namespaces.add(newNamespace);
            this.props.cluster.accessibleNamespaces = Array.from(this.namespaces);
          }}
          items={Array.from(this.namespaces)}
          remove={({ oldItem: oldNamesapce }) => {
            this.namespaces.delete(oldNamesapce);
            this.props.cluster.accessibleNamespaces = Array.from(this.namespaces);
          }}
        />
        <small className="hint">
          This setting is useful for manually specifying which namespaces you have access to. This is useful when you do not have permissions to list namespaces.
        </small>
      </>
    );
  }
}