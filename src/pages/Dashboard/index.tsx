import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import { Menu, Tab } from "../../base-components/Headless";
import Button from "../../base-components/Button";
import Litepicker from "../../base-components/Litepicker";
import fakerData from "../../utils/faker";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

import { FormCheck, FormInput } from "../../base-components/Form";
import Data from "./attribute/data";
import Informasi from "./attribute/informasi";

function Main() {
  

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-9">
        <Informasi />
        <Data />
      </div>
    </div>
  );
}

export default Main;
