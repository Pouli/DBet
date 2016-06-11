import template from './img-uploader.template.html';

import { Images } from '../../api/images';

import { upload } from '../../api/images';

class ImgUploaderController {
    constructor($scope, $reactive) {
        'ngInject';
        
        $reactive(this).attach($scope);

        this.subscribe('image');

        this.helpers({
            image() {
                const info = this.getReactively('imageInfo');

                if(!info || !info.id) return null;
                return Images.findOne({ _id: info.id });
            }
        });
    }

    addImages(files) {
        if (files.length) {
            this.currentFile = files[0];

            const reader = new FileReader;

            reader.onload = this.$bindToContext((e) => {
                this.cropImgSrc = e.target.result;
                this.myCroppedImage = '';
            });

            reader.readAsDataURL(files[0]);
        } else {
            this.cropImgSrc = undefined;
        }
    }

    save() {
        upload(this.myCroppedImage, this.currentFile.name, this.$bindToContext((file) => {
            if(!_.isEmpty(this.imageInfo)) {
                Images.remove(this.imageInfo.id);
                this.imageInfo.id = file._id;
                this.imageInfo.url = file.url;
                this.change();
            } else {
                this.imageInfo = {id: file._id, url: file.url};
            }
            this.reset();
        }), (e) => {
            console.log('Loading error', e);
        });
    }

    reset() {
        this.cropImgSrc = undefined;
        this.myCroppedImage = '';
    }
}

const ImgUploaderComponent = {
    templateUrl: template,
    controller: ImgUploaderController,
    controllerAs: 'ctrl',
    bindings: {
        type: '@',
        imageInfo: '=?',
        change: '&'
    }
};

export default ImgUploaderComponent;
