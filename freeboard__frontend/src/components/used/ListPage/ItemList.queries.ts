import {gql} from '@apollo/client';

export const FETCH_USED_ITEMS = gql`
    query fetchUseditems($search: String, $page: Int) {
        fetchUseditems(search: $search, page: $page) {
            _id
            remarks
            name
            price
            tags
            seller {
                name
            }
        }
    }
`;
