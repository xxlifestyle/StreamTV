import exp from "constants";

const config :IConfig = {
    server: {
        secret: 'kjVkuti2xAyF3JGCzSZTk0YWM5JhI9mgQW4rytXc'
    },
    rtmp_server: {
        rtmp: {
            port: 1935,
            chunk_size: 60000,
            gop_cache: true,
            ping: 60,
            ping_timeout: 30
        },
        http: {
            port: 8888,
            mediaroot: './server/media',
            allow_origin: '*'
        },
        trans: {
            ffmpeg: 'C:/Program Files/ffmpeg/bin/ffmpeg.exe',
            tasks: [],
            app: 'live',
            hls: true,
            hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
            dash: true,
            dashFlags: '[f=dash:window_size=3:extra_window_size=5]',
        }
    }
}

interface IConfig {
    server: IServer ,
    rtmp_server:{
     rtmp:IRtmpServer,
     http:IHttpServer,
     trans:ITrans
    }
}

interface IServer {
    secret: string
}
interface IRtmpServer{
    port: number,
    chunk_size: number,
    gop_cache: boolean,
    ping: number,
    ping_timeout: number
}
interface IHttpServer{
    port: number,
    mediaroot: string,
    allow_origin: string
}
interface ITrans{
    ffmpeg: string,
    tasks: [],
    app: string,
    hls: boolean,
    hlsFlags: string,
    dash: boolean,
    dashFlags: string,
}

export {config, IRtmpServer, IConfig}