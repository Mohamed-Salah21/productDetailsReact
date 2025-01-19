const DataFilters = () => {
  return (
    <>
      <div>
        <h3 className="text-xl">Material</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {["Metal", "Wood", "Stainless Steel", "Plastic", "Glass"].map(
            (field: string, idx: number) => (
              <button
                className={`bg-lightPrimary font-semibold text-sm border p-2 rounded-lg  ${
                  idx === 0
                    ? "text-primary border-primary"
                    : "text-grayTint border-transparent"
                } hover:text-primary hover:border-primary `}
                key={field}
              >
                {field}
              </button>
            )
          )}
        </div>
      </div>
      <div>
        <h3 className="text-xl">Colors</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {["#D90202", "#8D8E8D", "#988755", "#7198C8", "#5D5D5B"].map(
            (field: string, idx: number) => (
              <div>
                <button
                  className={`bg-lightPrimary font-semibold text-sm border p-2 md:h-16 md:w-16 h-12 w-12 rounded-lg flex items-center justify-center 
              hover:text-primary hover:border-primary `}
                  key={field}
                >
                  <span
                    style={{
                      backgroundColor: field,
                    }}
                    className={`md:h-10 md:w-10 w-8 h-8 rounded-full ${
                      idx === 0
                        ? " border-primary"
                        : "bg-grayTint border-transparent"
                    }`}
                  />
                </button>
                {field === "#8D8E8D" ? (
                  <p className="text-center text-xs font-medium mt-1">Grey</p>
                ) : null}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default DataFilters;
