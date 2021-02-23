import PriceA from "../components/information/priceMuseums";
import PriceB from "../components/information/pricePool";
import Transport from "../components/information/transport";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

function Information(props) {
  const useStyles = makeStyles({
    root: {
      height: 240,
      flexGrow: 1,
      maxWidth: 400,
    },
  });

  const classes = useStyles();

  return (
    <>
      <div className="container">
        <h1> Полезна информация </h1>
        <div className="row mt-3">
          <img
            src="https://imgrabo.com/pics/companies/42ebb3a6595b31794f43de612c231113.jpeg"
            alt="Info background"
            width="50%"
          ></img>
          <div className="col my-2">
            <TreeView
              className={classes.root}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem nodeId="1" label="Цени" className="mb-2">
                <div className="mt-2">
                  <PriceA />
                  <PriceB />
                </div>
              </TreeItem>
              <TreeItem nodeId="5" label="Транспорт">
                <div className="mt-2">
                  <Transport />
                </div>
              </TreeItem>
            </TreeView>
          </div>
        </div>
      </div>
    </>
  );
}
export default Information;
