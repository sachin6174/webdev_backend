 function calculateSurfaceArea(r){
            // 4 pi r ^ 3
            return 3 * calculateVolume(r)
        }
        function calculateVolume(r){
            // 4/3 pi r ^ 3
            return (4 / 3) * Math.PI * r *r*r
        }

        function volumeHemiSphere(r){
            return calculateVolume(r) / 2;
        }

        let radius = [4,5,3,7]
        let surfaceArea = new Array()
        let volume = new Array()
        let volumeHemi = new Array()
        for(let i = 0;i < radius.length;i++){
            let volumeOf = calculateVolume(radius[i])
            let surfaceAreaOf = volumeOf * 3
            let hemiVol = volumeOf / 2

            surfaceArea.push(surfaceAreaOf)
            volume.push(volumeOf)
            volumeHemi.push(hemiVol)
        }

        console.log(surfaceArea,volume,volumeHemi)

