export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Spotify Song Previews</h1>
      <p>Search for songs and listen to previews</p>
      <input 
        type="text" 
        placeholder="Search for songs..." 
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />
      <button style={{ padding: '10px 20px' }}>Search</button>
    </div>
  )
}
