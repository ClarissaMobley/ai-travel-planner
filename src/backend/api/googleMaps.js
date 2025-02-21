import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'

const libraries = ['places'];

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries,
    })
    if (!isLoaded) return<div>We'll be with you shortly</div>;

    return (
        <GoogleMap
        zoom={8}
        center={{ lat: 33.7490, lng: -84.3880 }} // Default location Atlanta
        mapContainerStyle={{ width: '100%', height: '400px' }}
        >
            <Marker position={{ lat: 33.7490, lng: -84.3880 }} />
        </GoogleMap>
    )
}

export default Map