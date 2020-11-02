clear all;
clc;


NumberOfTrials = 64; %Number of Trials
NumberOfBlocks = 5; %Number of Blocks

%Making WM_cue and WM_Probe

for h=0:4
    for i=0:1
        for j=0:1
            for k=0:1
                for l=0:1
                    for m=1:4
                        trialNumber=m+4*l+8*k+16*j+32*i+64*h;
                        changeState(trialNumber,1:4)=[i,j,k,l];
                        WM_Probe(trialNumber)=m;
                        WM_cue(trialNumber)=h;
                    end
                end
            end
        end
    end
end




rng(8); %8
initialAngles = [];

for i =1:4
initialAngles = [initialAngles, randsample([-90:1:90],NumberOfTrials*NumberOfBlocks,1)'];
end

% for i =1:size(initialAngles,1)
%     cutoff10 = any(abs(initialAngles(i,1) - initialAngles(i,2:4))<10) | any(abs(initialAngles(i,2) - initialAngles(i,3:4))<10) | any(abs(initialAngles(i,3) - initialAngles(i,4))<10);
%     cutoff170 = any(abs(initialAngles(i,1) - initialAngles(i,2:4))>170) | any(abs(initialAngles(i,2) - initialAngles(i,3:4))>170) | any(abs(initialAngles(i,3) - initialAngles(i,4))>170);
%     while cutoff10 | cutoff170
%         initialAngles(i,:) = randsample([-90:1:90],4);
%         cutoff10 = any(abs(initialAngles(i,1) - initialAngles(i,2:4))<10) | any(abs(initialAngles(i,2) - initialAngles(i,3:4))<10) | any(abs(initialAngles(i,3) - initialAngles(i,4))<10);
%         cutoff170 = any(abs(initialAngles(i,1) - initialAngles(i,2:4))>170) | any(abs(initialAngles(i,2) - initialAngles(i,3:4))>170) | any(abs(initialAngles(i,3) - initialAngles(i,4))>170);
%      end
%         
% end





changeDirection=round(rand(NumberOfTrials*NumberOfBlocks,4))*2-1;

Data = [WM_cue', WM_Probe',changeState];
dd = []; 
dd_train = []; 
    
    dd = [dd; Data(randperm(size(Data,1)),:)];
    dd_train = [dd_train; Data(randperm(size(Data,1)),:)];

% for i=1:200
% rng(i);
% dd=dd(randperm(size(dd,1)),:);
% dd_train=dd_train(randperm(size(dd_train,1)),:);
% end


%for delay

sizeOut = [1, NumberOfTrials*NumberOfBlocks/5]; % sample size
mu = 0.4;% parameter of exponential 
r1 = 0.0;  % lower bound
r2 = 0.400; % upper bound

r = exprndBounded(mu, sizeOut, r1, r2, 11); % 9,10,11 with mu = 0.5
% r = r*r2/max(r); 

r=(r2-r1)*r/(max(r)-min(r));
r=r-min(r)+r1;% To make the range from r1 to r2

r = round(r,2); % To convert it into a multiple of of 10ms
% histogram(r,'Normalization','pdf');
histogram(r);


% r1 = 0.750;  % lower bound
% r2 = 1.500; % upper bound
% r=generateExpTimeDistribution(r1,r2,NumberOfTrials*NumberOfBlocks/5);
% histogram(r,'Normalization','pdf');

%
blockNumber = ones(NumberOfTrials,1)*[1:NumberOfBlocks];
blockNumber = blockNumber(:);

% WM_cue_shape=[ones(1,NumberOfTrials*NumberOfBlocks/2) zeros(1,NumberOfTrials*NumberOfBlocks/2)];
% WM_cue_shape=Shuffle(WM_cue_shape)';

ResponseAFC = nan(NumberOfTrials*NumberOfBlocks,1);
RT_AFC = nan(NumberOfTrials*NumberOfBlocks,1);
delayDuration = nan(NumberOfTrials*NumberOfBlocks,1);

idx = randperm(NumberOfTrials*NumberOfBlocks); 
trialDataTrain = table(blockNumber,repmat([1:NumberOfTrials]',NumberOfBlocks,1), dd_train(:,1), initialAngles(idx,:),delayDuration(idx),dd_train(:,3:6),changeDirection, dd_train(:,2) , ResponseAFC,RT_AFC);
idx = randperm(NumberOfTrials*NumberOfBlocks); 
trialData = table(blockNumber,repmat([1:NumberOfTrials]',NumberOfBlocks,1), dd(:,1), initialAngles(idx,:),delayDuration(idx),dd(:,3:6),changeDirection, dd(:,2) , ResponseAFC,RT_AFC);

trialData.Properties.VariableNames = {'blockNum', 'trialNum', 'WM_cue', 'initialAngles',  'delayDuration','changeState','changeDirection', 'WM_Probe',  'ResponseAFC', 'RT_AFC'};
trialDataTrain.Properties.VariableNames = trialData.Properties.VariableNames;

[neutral,cued, ipsilateral, contralateral, opposite] = sides(trialData.WM_cue,trialData.WM_Probe);
trialData.delayDuration(neutral)=r(randperm(size(r,2)));
trialData.delayDuration(cued)=r(randperm(size(r,2)));
trialData.delayDuration(ipsilateral)=r(randperm(size(r,2)));
trialData.delayDuration(contralateral)=r(randperm(size(r,2)));
trialData.delayDuration(opposite)=r(randperm(size(r,2)));


[neutral,cued, ipsilateral, contralateral, opposite] = sides(trialDataTrain.WM_cue,trialDataTrain.WM_Probe);

trialDataTrain.delayDuration(neutral)=r(randperm(size(r,2)));
trialDataTrain.delayDuration(cued)=r(randperm(size(r,2)));
trialDataTrain.delayDuration(ipsilateral)=r(randperm(size(r,2)));
trialDataTrain.delayDuration(contralateral)=r(randperm(size(r,2)));
trialDataTrain.delayDuration(opposite)=r(randperm(size(r,2)));


%new change-- for alternate exogenous cue properties in the blocks
% trialData.WM_cue_shape(1:400)=0;
% trialData.WM_cue_shape([1:40 81:120 161:200 241:280 321:360])=1;
% trialDataTrain.WM_cue_shape(1:400)=0;
% trialDataTrain.WM_cue_shape([1:40 81:120 161:200 241:280 321:360])=1;
save('TrialDetails.mat','trialData','trialDataTrain');