import { timeout } from '../../utils'
import { toggleBanner } from '../bannerVisible/actions'
import { BANNER_TIMEOUT } from '../../constants'
import { UPDATE_DIFF } from '../types'

export const showBanner = difference => dispatch => {
  dispatch(updateBannerDiff(difference))
  dispatch(toggleBanner(true))
  timeout(BANNER_TIMEOUT)
    .then(() => dispatch(toggleBanner(false)))
}

export const updateBannerDiff = payload => ({
  type: UPDATE_DIFF,
  payload
})
