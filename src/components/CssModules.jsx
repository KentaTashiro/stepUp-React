import saasStyle from "./CssModules.module.scss";
export const CssModules = () => {
  return (
    <div className={saasStyle.container}>
      <p className={saasStyle.title}>- CSS Modules -</p>
      <button className={saasStyle.button}>FIGHT!!</button>
    </div>
  );
};
