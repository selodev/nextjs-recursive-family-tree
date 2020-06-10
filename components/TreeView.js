import { useState, useEffect } from "react";
import Styles from "./Styles";

const hasChildren = (children) => {
  return children && children.length;
};

const TreeView = ({ branches, className, level = 0, children }) => {
  const [expanded, setExpanded] = useState({});
  const updateDropDown = (id) => {
    setExpanded({ ...expanded, [id]: expanded[id] ? !expanded[id] : true });
  };
  useEffect(() => {
    //console.log(expanded);
  });

  return (
    <>
      <ul className={className ? `tree-view ${className}` : "tree-view"}>
        {branches.map((branch, index) => {
          const { name: branchName, children: branchChildren } = branch;
          let parent = `level-${level}-${index}`;
          let parentClass = expanded[parent] ? "parent active" : "parent";
          let childClass = expanded[parent] ? "arrow down" : "arrow right";
          return (
            <li key={`level-${level}-${index}`} id={`level-${level}-${index}`}>
              {hasChildren(branchChildren) ? (
                <>
                  <div
                    className={parentClass}
                    onClick={() => {
                      updateDropDown(parent);
                    }}
                  >
                    <div className={childClass}></div>
                    <div>{branchName}</div>
                  </div>
                  {hasChildren(branchChildren) && (
                    <TreeView
                      branches={branchChildren}
                      className="nested"
                      level={level + 1}
                    />
                  )}
                </>
              ) : (
                <>{branchName}</>
              )}
            </li>
          );
        })}
      </ul>
      <Styles />
    </>
  );
};
export default React.memo(TreeView);
