import template from './img-uploader.template.html';

import { Images } from '../../api/images';

import { upload } from '../../api/images';

class ImgUploaderController {
    /*@ngInject*/
    constructor($scope, $reactive) {
        $reactive(this).attach($scope);

        this.subscribe('image');

        this.helpers({
            image() {
                const info = this.getReactively('imageInfo');

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
            }
            this.imageInfo = {id: file._id, url: file.url};
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
    templateUrl: 'imports/components/img-uploader/img-uploader.template.html',
    controller: ImgUploaderController,
    controllerAs: 'ctrl',
    bindings: {
        type: '@',
        imageInfo: '=?'
    }
};

export default ImgUploaderComponent;
