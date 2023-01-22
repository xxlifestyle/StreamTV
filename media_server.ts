import {config} from "./configs/default";
import NodeMediaServer from "node-media-server";
import {User} from "./models/users.model";
import {IUser} from "./models/interfaces/users.interface";


    const newConfig  = config.rtmp_server;

const nms  = new NodeMediaServer(newConfig) as NodeMediaServer;

nms.on('prePublish', async (id, StreamPath, args) => {
    let stream_key = getStreamKeyFromStreamPath(StreamPath);

    console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);

    User.findOne({stream_key: stream_key},(user :IUser , err :Error)=>{
        if (!err){
            if (!user){
                let session  = nms.getSession(id)
                // @ts-ignore
                session.reject()
            } else {
                console.log('SOMETHING')
            }
        }
    })
});

const getStreamKeyFromStreamPath = (path :string) => {
    let parts = path.split('/');
    return parts[parts.length - 1];
};

export {nms}