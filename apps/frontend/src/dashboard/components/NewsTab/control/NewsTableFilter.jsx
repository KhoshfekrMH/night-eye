export default function NewsTableFilter({ filters, setFilters }) {
  return (
    <fieldset className="fieldset space-y-3">
      <legend className="fieldset-legend font-bold">Filter</legend>

      <label className="label" for="category">
        Category
      </label>
      <select
        name="category"
        value={filters.category}
        className="select select-ghost select-sm"
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, category: e.target.value }))
        }
      >
        <option value="">All</option>
        <option value="space">space</option>
        <option value="nasa">nasa</option>
        <option value="tech">tech</option>
      </select>

      <label className="label" for="status">
        Status
      </label>
      <select
        name="status"
        value={filters.status}
        className="select select-ghost select-sm"
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, status: e.target.value }))
        }
      >
        <option value="">All</option>
        <option value="published">published</option>
        <option value="draft">draft</option>
        <option value="archived">archived</option>
      </select>

      <div className="flex flex-row gap-2">
        <label className="label">
          <input
            type="checkbox"
            name="badged"
            checked={filters.badged}
            className="checkbox checkbox-sm"
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, badged: e.target.checked }))
            }
          />
          <span>Badged</span>
        </label>

        <label className="label">
          <input
            type="checkbox"
            name="hero"
            checked={filters.hero}
            className="checkbox checkbox-sm"
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, hero: e.target.checked }))
            }
          />
          <span>Hero</span>
        </label>
      </div>
    </fieldset>
  );
}
