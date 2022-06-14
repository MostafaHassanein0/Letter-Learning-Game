html {
    font-size: 10px;
    background-image: -webkit-gradient(linear, 50% 100%, 50% 0%, color-stop(0%,#4DB3DD), color-stop(100%,#52B7E1) );
    background-size: cover;
  }
  
  body,html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  
h1,h2 {
  text-align: center;
  color: rgb(4, 47, 122);
}

input {
  margin: 12px auto;
  display: block;
  height: 2.5rem;
  width: 250px;
  border-radius: .5rem;
}

  #keyID, #keyIDPressed {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }
  
  .wrapper {
    flex: 1;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px);
  }

  .showing {
    opacity: 0;
  }

  .key {
    border-radius: .5rem;
    margin: 1rem;
    font-size: 1.5rem;
    padding: 2.5rem .5rem;
    position: relative;
    transition: all .07s ease;
    min-width: calc(10%);
    max-width: 12rem;
    text-align: center;
    color: white;
    background: rgba(16,90,201);
    text-shadow: 0 0 .5rem black;
  }
  
  .key:active {
    transform: scale(0.97);
    transition: transform .2s;
  }

  .back {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0px;
  }

  .playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }
  
  kbd {
    display: block;
    font-size: 4rem;
  }
  
  .sound {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    color: #ffc600;
  }

  footer {
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    height: 40px;
    color: rgb(4, 47, 122);
  }
