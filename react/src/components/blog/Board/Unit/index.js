import React from "react";
import styles from "./unit.module.css";

import { Link } from "react-router-dom";
import MetaInfo from "@components/common/MetaInfoCard";
import EditButtons from "./EditButtons";

export default function Unit({ data, id, auth }) {
  //console.log(data, auth)
  return (
    <li className={styles.section}>
      <div className={styles.textbox}>
        <Link to={`/blog/view/${id}`}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.abstract}>{data.abstract}</p>
        </Link>
        <MetaInfo {...data} />
      </div>
      {data.thumbnailUrl && (
        <div className={styles.imagebox}>
          <img src={data.thumbnailUrl} />
        </div>
      )}
      {auth?.user?.id == data.author.id && <EditButtons id={id} auth={auth} />}
    </li>
  );
}
