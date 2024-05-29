function Items({ currentItems, filter, highlight }) {
    return (
      <>
        {currentItems &&
          currentItems.map((entry) => {
            if (filter.length === 0 || filter.includes(entry.category)) {
              return (
                <ApiCard
                  key={entry.id}
                  id={entry.id}
                  title={entry.title}
                  url={entry.file.url}
                  alt={entry.title}
                  description={entry.description}
                  popularity={entry.popularity}
                  category={entry.category}
                  highlight={highlight}
                />
              );
            }
            return null;
          })}
      </>
    );
  }
  
  
export default Items;