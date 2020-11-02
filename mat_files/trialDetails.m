clear all;
clc;


NumberOfTrials = 64; %Number of Trials
NumberOfBlocks = 8; %Number of Blocks

trialNumber = 0;
for h=1:4 % cue
    for i=0:1 % change at location 1
        for j=0:1 % change at location 2
            for k=0:1 % change at location 3
                for l=0:1 % change at location 4
                    for m=1:4 % probe
                        trialNumber = trialNumber + 1; 
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

changeDirection=round(rand(NumberOfTrials*NumberOfBlocks,4))*2-1;

Data = [WM_cue', WM_Probe',changeState];
dd = []; 
dd_train = []; 
    
dd = [dd; Data(randperm(size(Data,1)),:)];
dd_train = [dd_train; Data(randperm(size(Data,1)),:)];
dd = [dd; Data(randperm(size(Data,1)),:)];
dd_train = [dd_train; Data(randperm(size(Data,1)),:)];


sizeOut = [1, NumberOfTrials*NumberOfBlocks/4]; % sample size
mu = 0.6;% parameter of exponential 0.4
r1 = 0.1;  % lower bound
r2 = 1; % upper bound

r = exprndBounded(mu, sizeOut, r1, r2, 10); % 9,10,11 with mu = 0.5 11 m=0.4
% r = r*r2/max(r); 

r=(r2-r1)*r/(max(r)-min(r));
r=r-min(r)+r1;% To make the range from r1 to r2

r = round(r,2); % To convert it into a multiple of of 10ms
% histogram(r,'Normalization','pdf');
histogram(r);


%% Delay Fixation
mu = 0.02;% parameter of exponential 0.4
r1 = 0.0;  % lower bound
r2 = 0.050; % upper bound

rd = exprndBounded(mu, sizeOut, r1, r2, 1); % 9,10,11 with mu = 0.5 11 m=0.4
% r = r*r2/max(r); 

rd=(r2-r1)*rd/(max(rd)-min(rd));
rd=rd-min(rd)+r1;% To make the range from r1 to r2

rd = round(rd,2); % To convert it into a multiple of of 10ms
% histogram(r,'Normalization','pdf');
figure;
histogram(rd);

%
blockNumber = ones(NumberOfTrials,1)*[1:NumberOfBlocks];
blockNumber = blockNumber(:);
rng(6);
trialType=zeros(NumberOfTrials*NumberOfBlocks,1);

ResponseAFC = nan(NumberOfTrials*NumberOfBlocks,1);
RT_AFC = nan(NumberOfTrials*NumberOfBlocks,1);
delayDuration = nan(NumberOfTrials*NumberOfBlocks,1);
delayDurationFixation = nan(NumberOfTrials*NumberOfBlocks,1);

idx = randperm(NumberOfTrials*NumberOfBlocks); 
trialDataTrain = table(blockNumber,repmat([1:NumberOfTrials]',NumberOfBlocks,1), dd_train(:,1), initialAngles(idx,:),delayDurationFixation,delayDuration(idx),dd_train(:,3:6),changeDirection, dd_train(:,2) , ResponseAFC,RT_AFC);
idx = randperm(NumberOfTrials*NumberOfBlocks); 
trialData = table(blockNumber,repmat([1:NumberOfTrials]',NumberOfBlocks,1), dd(:,1), initialAngles(idx,:),delayDurationFixation,delayDuration(idx),dd(:,3:6),changeDirection, dd(:,2) , ResponseAFC,RT_AFC);

trialData.Properties.VariableNames = {'blockNum', 'trialNum', 'WM_cue', 'initialAngles',  'delayDurationFixation','delayDuration','changeState','changeDirection', 'WM_Probe',  'ResponseAFC', 'RT_AFC'};
trialDataTrain.Properties.VariableNames = trialData.Properties.VariableNames;

[neutral,cued, ipsilateral, contralateral, opposite] = sides(trialData.WM_cue,trialData.WM_Probe);
trialData.delayDuration(cued)=r(randperm(size(r,2)));
trialData.delayDuration(ipsilateral)=r(randperm(size(r,2)));
trialData.delayDuration(contralateral)=r(randperm(size(r,2)));
trialData.delayDuration(opposite)=r(randperm(size(r,2)));

trialData.delayDurationFixation(cued)=rd(randperm(size(rd,2)));
trialData.delayDurationFixation(ipsilateral)=rd(randperm(size(rd,2)));
trialData.delayDurationFixation(contralateral)=rd(randperm(size(rd,2)));
trialData.delayDurationFixation(opposite)=rd(randperm(size(rd,2)));


[neutral,cued, ipsilateral, contralateral, opposite] = sides(trialDataTrain.WM_cue,trialDataTrain.WM_Probe);

trialDataTrain.delayDuration(cued)=r(randperm(size(r,2)));
trialDataTrain.delayDuration(ipsilateral)=r(randperm(size(r,2)));
trialDataTrain.delayDuration(contralateral)=r(randperm(size(r,2)));
trialDataTrain.delayDuration(opposite)=r(randperm(size(r,2)));

trialDataTrain.delayDurationFixation(cued)=rd(randperm(size(rd,2)));
trialDataTrain.delayDurationFixation(ipsilateral)=rd(randperm(size(rd,2)));
trialDataTrain.delayDurationFixation(contralateral)=rd(randperm(size(rd,2)));
trialDataTrain.delayDurationFixation(opposite)=rd(randperm(size(rd,2)));

save('TrialDetails.mat','trialData','trialDataTrain');