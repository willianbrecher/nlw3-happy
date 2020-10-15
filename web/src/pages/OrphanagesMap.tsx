import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImp from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';
import api from '../services/api';

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            if (JSON.stringify(response.data) != '{}')
                setOrphanages(response.data);
        });
    }, [])

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImp} alt="" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Foz do Iguaçu</strong>
                    <span>Paraná</span>
                </footer>
            </aside>

            <Map
                center={[-25.4915754, -54.576602]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}>
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            key={orphanage.id}
                            position={[orphanage.latitude, orphanage.longitude]}
                            icon={mapIcon}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`orphanage/${orphanage.id}`} >
                                    <FiArrowRight size={20} color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>
                    );
                })}

            </Map>

            <Link to="/orphanage/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;