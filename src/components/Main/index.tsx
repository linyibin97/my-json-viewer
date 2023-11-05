const Main = () => {
  return (
    <div className="bp5-card flex-1">
      <h1 className="bp5-heading {{.modifier}}">H1 heading</h1>
      <h2 className="bp5-heading {{.modifier}}">H2 heading</h2>
      <h3 className="bp5-heading {{.modifier}}">H3 heading</h3>
      <h4 className="bp5-heading {{.modifier}}">H4 heading</h4>
      <h5 className="bp5-heading {{.modifier}}">H5 heading</h5>
      <h6 className="bp5-heading {{.modifier}}">H6 heading</h6>
    </div>
  );
};

export default Main;
