import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useContext} from 'react';
import Itemlist from '../../src/components/used/ListPage/ItemList.container';
import {GlobalContext} from '../_app';

export default function ItemlistPage() {
    const router = useRouter();
    const {token} = useContext(GlobalContext);
    // if (token) {
    return <Itemlist></Itemlist>;
    // }
    // useEffect(() => {
    //     router.push(`/board`);
    // }, []);
    // return <div />;
}
