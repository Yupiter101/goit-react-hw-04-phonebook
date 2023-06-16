
import PropTypes from 'prop-types';
import css from "./Filter.module.css";



export function Filter({searchVal, onSearchSet}) {

    return (
      <label className={css.FilterLabel}>Find contacs by name
        <input
          className={css.FilterInput}
          type="text"
          name="search"
          title="find contacs by name"
          value={searchVal}
          onChange={onSearchSet}
        />
      </label>
    )
}

Filter.propTypes = {
  searchVal: PropTypes.string.isRequired,
  onSearchSet: PropTypes.func.isRequired
}