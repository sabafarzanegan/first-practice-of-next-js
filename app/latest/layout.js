export default function LatestLayout({ latest, archive }) {
  return (
    <>
      <div>
        <h1 className="title-archive">The Archive Page</h1>
        <section id="archive-filter">{archive}</section>
        <section id="archive-latest">{latest}</section>
      </div>
    </>
  );
}
