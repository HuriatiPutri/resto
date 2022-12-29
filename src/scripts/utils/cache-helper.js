/* eslint-disable no-underscore-dangle */
import CONFIG from '../global/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(requests) {
    const response = await caches.match(requests);
    if (response) {
      this._fetchRequest(requests);
      return response;
    }
    return this._fetchRequest(requests);
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(requests) {
    const response = await fetch(requests);
    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(requests);
    return response;
  },

  async _addCache(requests) {
    const cache = await this._openCache();
    cache.add(requests);
  },
};

export default CacheHelper;
