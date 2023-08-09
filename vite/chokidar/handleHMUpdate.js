const chokidar = require('chokidar');

export function watch() {
    const watcher = chokidar.watch('file', {
        ignored: ['**/node_modules/**', '**/.git/**'],
        ignoreInitial: true,
        ignorePermissionErrors: true,
        disableGlobbing: true,
    })
    return watcher
}

export function handleHMRupdate(opts) {
    const {
        file,
        ws
    } = opts
    const shortFile = getShortName(file, appRoot)
    const timeStamp = Date.now()

    let updates;
    if (shortFile.endsWith('.css')) {
        updates = [{
            type: 'js-update',
            timeStamp,
            path: `${shortFile}`,
            acceptedPaths: `${shortFile}`
        }]
    }
    ws.send({
        type: 'update',
        updates
    })
}