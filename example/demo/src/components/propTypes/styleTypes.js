/*
 * @Author: jerrychir 
 * @Date: 2018-08-21 17:00:12 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-21 17:00:46
 */
import PropTypes from "prop-types";

export default PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.number,
  PropTypes.array
]);
