import { isUndefined, omitBy } from 'lodash';
import useQueryParams from 'src/hooks/useQueryParams';
export default function useQueryConfig() {
    const queryParams = useQueryParams();
    const queryConfig = omitBy({
        page: queryParams.page || '1',
        limit: queryParams.limit || '20',
        sort_by: queryParams.sort_by,
        exclude: queryParams.exclude,
        name: queryParams.name,
        order: queryParams.order,
        price_max: queryParams.price_max,
        price_min: queryParams.price_min,
        rating_filter: queryParams.rating_filter,
        category: queryParams.category
    }, isUndefined);
    return queryConfig;
}
